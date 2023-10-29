import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageTable = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/violins/').then(response => {
      setSelectedImages(response.data);
    });
  }, []);

  const tableContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    backgroundColor: '#f5f5f5',
    padding: '20px'
  };

  const tableStyle = {
    // width: '50%',
    borderCollapse: 'collapse',
    textAlign: 'left',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)'

    
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const modalStyle = {
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
   
    backgroundColor: 'rgba(0,0,0,0.9)',
    padding: '60px'
  };

  const closeStyle = {
    position: 'absolute',
    top: '15px',
    right: '35px',
    color: '#fff',
    fontSize: '40px',
    fontWeight: 'bold',
    cursor: 'pointer'
  };

  return (
    <div style={tableContainerStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {selectedImages.map(violin => (
            <tr key={violin.id}>
              <td>{violin.name}</td>
              <td>
                <img 
                  src={violin.image} 
                  alt={violin.name} 
                  style={{ maxWidth: '100px', cursor: 'pointer' }} 
                  onClick={() => openModal(violin.image)}
                />
              </td>
              <td>{violin.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalImage && (
        <div style={modalStyle}>
          <span style={closeStyle} onClick={closeModal}>&times;</span>
          <img src={modalImage} style={{ maxWidth: '100%' }} alt="Modal" />
        </div>
      )}
    </div>
  );
};

export default ImageTable;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ImageSelector = () => { 
//     const [selectedImage, setSelectedImage] = useState(null);

//     useEffect(() => {
//         axios.get('http://localhost:8000/api/violins/').then(response => {
//             setSelectedImage(response.data);
//         });
//       }, []);

// return (
//     <div>
//       {selectedImage?.map(violin => (
//         <div key={violin.id}>
//           <h2>{violin.name}</h2>
//           <img src={violin.image} alt={violin.name} style={{ display: 'block', maxWidth: '20%', margin: '20px auto' }} />
//           <p style={{ textAlign: 'center' }}>{violin.description}</p>
//         </div>
//       ) )}
//     </div>

//     <div>
//         <Menu setSelectedImage={setSelectedImage} />
//         {selectedImage && <Violin imageName={selectedImage} />}
//     </div>
    //  );
    // }

// const Menu = ({ setSelectedImage }) => {
//     return (
//         <table style={{ width: '300px', margin: '0 auto', borderCollapse: 'collapse' }}>
//             <tbody>
//                 <TableRow imageName="violin1.jpg" setSelectedImage={setSelectedImage} label="显示小提琴 1" />
//                 <TableRow imageName="violin2.jpg" setSelectedImage={setSelectedImage} label="显示小提琴 2" />
//                 <TableRow imageName="violin3.jpg" setSelectedImage={setSelectedImage} label="显示小提琴 3" />
//                 {/* 根据需要添加更多的行 */}
//             </tbody>
//         </table>
//     );
// }

// const TableRow = ({ imageName, setSelectedImage, label }) => {
//     return (
//         <tr>
//             <td style={cellStyle}><img src={process.env.PUBLIC_URL + '/images/' + imageName} alt={label} style={{ maxWidth: '50px' }} /></td>
//             <td style={cellStyle}><button onClick={() => setSelectedImage(imageName)}>{label}</button></td>
//         </tr>
//     );
// }

// const Violin = ({ imageName }) => {
//     return (
//         <img src={process.env.PUBLIC_URL + '/images/' + imageName} alt="Violin" style={{ display: 'block', maxWidth: '80%', margin: '20px auto' }} />
//     );
// }

// const cellStyle = {
//     border: '1px solid #ccc',
//     padding: '10px',
//     textAlign: 'center'
// };


// export default ImageSelector;
