

export const cloudinary = async (files) => {

  if (!files) throw new Error('No se recibio ninguna imagen');

  const cloudUrl = 'https://api.cloudinary.com/v1_1/dphxj5ff2/image/upload';

  const formData = new FormData();
  formData.append('upload_preset', 'react-journal');
  formData.append('file', files);

  try {
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData
    })

    if (!resp.ok) throw new Error('Tuvimos problemas con la API');

    const cloudyData = await resp.json();

    return cloudyData.secure_url;

  } catch (error) {
    console.error(error.message)
    throw new Error('No se completo el fech de datos')
  }

}
