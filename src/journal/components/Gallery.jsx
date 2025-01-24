
const imagenes = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
  { id: '7' },
  { id: '8' },
  { id: '9' },
  { id: '10' },
  { id: '11' }
]

export function Gallery() {
  return (


    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {
        imagenes.map(image => (
          <div key={image.id}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${image.id}.jpg`}
              alt=""
            />
          </div>
        ))
      }
    </div>

  );
};