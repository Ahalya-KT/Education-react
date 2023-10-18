import React from 'react'



const Button = (props) => {
  return (
    <div>
      <Button className="bg-white py-2 px-5 rounded-full mt-4 outline hover: shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-brightGreen hover:text-white">
       {props.title}
      </Button>
    </div>
  )
}

export default Button
