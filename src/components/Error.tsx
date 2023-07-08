import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// const notify = () => {
//   toast.error(, {
//     position: "top-right",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "light",
//     });
// };

const Error = () => {
  toast.error('User not Found 🔍', {
    position: "bottom-center",
    hideProgressBar: false,
    theme: "dark",
    pauseOnHover: false,
  })

  return (
    <ToastContainer autoClose={3000}/>
  )
}

export default Error;
