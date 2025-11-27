// components/Logo.tsx
const Logo = () => {
  return (
    <div className="group flex cursor-pointer items-center gap-1 font-mono font-bold">
      <span className="text-3xl text-teal-400 transition-transform duration-200 group-hover:-translate-y-0.5 dark:text-teal-300">
        {'>'}
      </span>
      <span className="text-3xl text-teal-500 transition-colors duration-200 group-hover:text-teal-300 dark:text-teal-300 dark:group-hover:text-teal-200">
        Backouts
      </span>
      <span className="cursor-blink ml-1 text-3xl text-teal-400 transition-transform duration-150 group-hover:translate-x-1 dark:text-teal-300">
        _
      </span>
    </div>
  )
}

export default Logo
