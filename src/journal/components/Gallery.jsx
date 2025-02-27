
export function Gallery({ images }) {

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {
        images.map(image => (
          <div key={image}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image}
            />
          </div>
        ))
      }
    </div>

  );
};