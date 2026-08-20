
import clsx from 'clsx';

export default function SelectButton(props) {
  
 
  
 
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => props.toggle()}
        className="inline-flex h-7 w-7 items-center justify-center rounded-2xl border-2 border-black bg-white p-0.5"
      >
        <span
          className={clsx(
            'h-4 w-4 rounded-full',
            {
              'bg-gray-400': props.isSelected === false,
              'bg-green-500': props.isSelected === true,
            },
          )}
        />
      </button>
      <p className="text-2xl font-sans">{props.name}</p>
    </div>
  );
}