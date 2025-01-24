
export function FormularioLayout({ children, title = '' }) {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 space-y-6">
      <h5 className="text-xl font-medium text-gray-900 dark:text-white">
        {title}
      </h5>
      {children}
    </div>
  );
};