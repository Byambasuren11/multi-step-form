
import Left from "./Left-Logo";
import Right from "./Right-Logo";
const Header=()=>{
    return (
        <div className="flex flex-col gap-6">
        <div className="flex gap-1">
          <Left />
          <Right />
        </div>
        <div>
          <div className="text-xl h-2 font-extrabold text-black mb-6">
            Join Us!😎
          </div>
          <p className="text-xs text-gray-500">
            Please provide all current information accurately.
          </p>
        </div>
      </div>
    )
}
export default Header;