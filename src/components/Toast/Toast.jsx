import { CheckCircle, XCircle } from "lucide-react";
import "./Toast.css";
function Toast({ message, type = "success" }) {
  return (
    <div className={`toast ${type}`}>
      {type === "success" ? (
        <CheckCircle size={22} />  ) : (<XCircle size={22} />)}
      <span>{message}</span>
    </div> );
}
export default Toast;

