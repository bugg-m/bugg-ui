import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  forwardRef,
} from 'react';
import { cn } from '@src/utils/core-css-utility';
import { cva, VariantProps } from 'class-variance-authority';
import { Icon } from '../Icon/Icon';
import icons from '@src/constants/icons';

const calendarButtonStyles = cva(
  'w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all',
  {
    variants: {
      state: {
        default: 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900',
        selected: 'bg-primary-500 text-white',
        disabled: 'text-gray-400 cursor-not-allowed',
        inRange: 'bg-primary-100 text-primary-700',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  }
);

const datePickerWrapperStyles = cva(
  'relative w-64 p-2 rounded-lg shadow-lg cursor-pointer flex items-center transition-all',
  {
    variants: {
      variant: {
        default: 'bg-white dark:bg-gray-800',
        outline: 'border border-gray-300 dark:border-gray-600',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface IDatePickerProps
  extends VariantProps<typeof datePickerWrapperStyles>,
    VariantProps<typeof calendarButtonStyles> {
  onDateSelect?: (date: Date | [Date, Date]) => void;
  selectedDate?: Date | [Date, Date];
  minDate?: Date;
  maxDate?: Date;
  dateFormat?: (date: Date) => string;
  isRange?: boolean;
}

function mergeRefs<T>(
  ...refs: (React.Ref<T> | undefined)[]
): React.RefCallback<T> {
  return (value: T) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}

const DatePicker = forwardRef<HTMLDivElement, IDatePickerProps>(
  (
    {
      onDateSelect,
      selectedDate: propSelectedDate,
      minDate,
      maxDate,
      dateFormat = (date: Date) => date.toLocaleDateString(),
      isRange = false,
      variant,
    },
    ref
  ) => {
    const [currentMonth, setCurrentMonth] = useState(
      Array.isArray(propSelectedDate)
        ? propSelectedDate[0]
        : propSelectedDate || new Date()
    );
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<
      Date | [Date, Date] | undefined
    >(propSelectedDate);
    const internalRef = useRef<HTMLDivElement>(null);
    const datePickerRef = mergeRefs(ref, internalRef);

    useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
        if (
          internalRef.current &&
          !internalRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, []);

    const changeMonth = useCallback((offset: number) => {
      setCurrentMonth((prevMonth) => {
        const newMonth = new Date(prevMonth);
        newMonth.setMonth(newMonth.getMonth() + offset);
        return newMonth;
      });
    }, []);

    const changeYear = useCallback((offset: number) => {
      setCurrentMonth((prevMonth) => {
        const newMonth = new Date(prevMonth);
        newMonth.setFullYear(newMonth.getFullYear() + offset);
        return newMonth;
      });
    }, []);

    const handleDateSelect = (date: Date) => {
      if (!isRange) {
        setSelectedDate(date);
        onDateSelect && onDateSelect(date);
        setIsOpen(false);
        return;
      }

      if (!selectedDate || !Array.isArray(selectedDate)) {
        setSelectedDate([date, date]);
        return;
      }

      if (selectedDate[0].toDateString() === selectedDate[1].toDateString()) {
        const start = selectedDate[0];
        if (date.getTime() === start.getTime()) {
          return;
        } else if (date < start) {
          const newRange: [Date, Date] = [date, start];
          setSelectedDate(newRange);
          onDateSelect && onDateSelect(newRange);
        } else {
          const newRange: [Date, Date] = [start, date];
          setSelectedDate(newRange);
          onDateSelect && onDateSelect(newRange);
        }
      } else {
        setSelectedDate([date, date]);
        onDateSelect && onDateSelect([date, date]);
      }
    };

    const isInRange = (date: Date) => {
      if (!selectedDate || !Array.isArray(selectedDate)) return false;
      return date >= selectedDate[0] && date <= selectedDate[1];
    };

    const getDaysInMonth = (year: number, month: number) => {
      return new Date(year, month + 1, 0).getDate();
    };

    const renderCalendar = (): React.ReactNode[] => {
      const year = currentMonth.getFullYear();
      const month = currentMonth.getMonth();
      const daysInMonth = getDaysInMonth(year, month);
      const firstDayOfMonth = new Date(year, month, 1).getDay();
      const daysArray: React.ReactNode[] = [];

      // Empty cells for days before the first day of the month
      for (let i = 0; i < firstDayOfMonth; i++) {
        daysArray.push(
          <div key={`empty-${i}`} className='text-secondary-light'></div>
        );
      }

      // Days of the month
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const isSelected =
          selectedDate &&
          (Array.isArray(selectedDate)
            ? selectedDate.some((d) => d.toDateString() === date.toDateString())
            : date.toDateString() === selectedDate.toDateString());
        const isDisabled =
          (minDate && date < minDate) || (maxDate && date > maxDate);

        daysArray.push(
          <button
            key={day}
            onClick={() => !isDisabled && handleDateSelect(date)}
            className={cn(
              calendarButtonStyles({
                state: isSelected
                  ? 'selected'
                  : isDisabled
                    ? 'disabled'
                    : isInRange(date)
                      ? 'inRange'
                      : 'default',
              })
            )}
            disabled={isDisabled}
          >
            {day}
          </button>
        );
      }

      return daysArray;
    };

    return (
      <div className='relative' ref={datePickerRef}>
        <div
          className={cn(datePickerWrapperStyles({ variant }))}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon icon={icons.calender} className='text-secondary-500 mr-2' />
          <span className='text-text dark:text-text-dark'>
            {selectedDate
              ? Array.isArray(selectedDate)
                ? `${dateFormat(selectedDate[0])} - ${dateFormat(selectedDate[1])}`
                : dateFormat(selectedDate)
              : 'Select date'}
          </span>
        </div>
        {isOpen && (
          <div className='absolute top-full mt-2 w-64 bg-background dark:bg-background-dark rounded-lg shadow-lg z-10'>
            <div className='flex justify-between items-center p-2 border-b border-secondary'>
              <Icon
                icon={icons.arrowsLeft}
                className='text-secondary-500 cursor-pointer'
                onClick={() => changeYear(-1)}
              />
              <Icon
                icon={icons.arrowLeft}
                className='text-secondary-500 cursor-pointer'
                onClick={() => changeMonth(-1)}
              />
              <span className='text-text dark:text-text-dark font-semibold'>
                {currentMonth.toLocaleString('default', {
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              <Icon
                icon={icons.arrowRight}
                className='text-secondary-500 cursor-pointer'
                onClick={() => changeMonth(1)}
              />
              <Icon
                icon={icons.arrowsRight}
                className='text-secondary-500 cursor-pointer'
                onClick={() => changeYear(1)}
              />
            </div>
            <div className='p-2'>
              <div className='grid grid-cols-7 gap-1 text-center mb-2'>
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                  <div
                    key={day}
                    className='text-center font-medium text-secondary-700'
                  >
                    {day}
                  </div>
                ))}
              </div>
              <div className='grid grid-cols-7 gap-1'>{renderCalendar()}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';

export { DatePicker };
