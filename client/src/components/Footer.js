// import React from 'react';
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBIcon,
//   MDBBtn
// } from 'mdb-react-ui-kit';

// const Footer = () => {
//   return (
//     <div className="ftr">
//       <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
//         <MDBContainer className='pt-4'>
//           <section className='mb-4'>
//             <MDBBtn
//               rippleColor="dark"
//               color='link'
//               floating
//               size="lg"
//               className='text-dark m-1'
//               href='#!'
//               role='button'
//             >
//               <MDBIcon fab className='fa fa-facebook-f' />
//             </MDBBtn>

//             <MDBBtn
//               rippleColor="dark"
//               color='link'
//               floating
//               size="lg"
//               className='text-dark m-1'
//               href='#!'
//               role='button'
//             >
//               <MDBIcon fab className='fa fa-twitter' />
//             </MDBBtn>

//             <MDBBtn
//               rippleColor="dark"
//               color='link'
//               floating
//               size="lg"
//               className='text-dark m-1'
//               href='#!'
//               role='button'
//             >
//               <MDBIcon fab className='fa fa-google' />
//             </MDBBtn>

//             <MDBBtn
//               rippleColor="dark"
//               color='link'
//               floating
//               size="lg"
//               className='text-dark m-1'
//               href='#!'
//               role='button'
//             >
//               <MDBIcon fab className='fa fa-instagram' />
//             </MDBBtn>

//             <MDBBtn
//               rippleColor="dark"
//               color='link'
//               floating
//               size="lg"
//               className='text-dark m-1'
//               href='#!'
//               role='button'
//             >
//               <MDBIcon fab className='fa fa-linkedin' />
//             </MDBBtn>

//             <MDBBtn
//               rippleColor="dark"
//               color='link'
//               floating
//               size="lg"
//               className='text-dark m-1'
//               href='#!'
//               role='button'
//             >
//               <MDBIcon fab className='fa fa-github' />
//             </MDBBtn>
//           </section>
//         </MDBContainer>

//         <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//           © 2023 Copyright:
//           <a className='text-dark' style={{ textDecoration: 'none' }} href='/'>
//             Expensify.com
//           </a>
//         </div>
//       </MDBFooter>
//     </div>
//   );
// }

// export default Footer;




import React from "react";

const Footer = () => {
  return (
    <div className="ftr">
      <div className="bg-dark text-light p-4">
        <h6 className="text-center">All Rights Reserved 2023 &copy; Expensify</h6>
      </div>
    </div>
  );
};

export default Footer;