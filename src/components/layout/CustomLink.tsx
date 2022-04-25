import React, { FC } from 'react'
import { Link ,useMatch} from 'react-router-dom'

interface ICustomLink {
    to:string;
}

const  CustomLink:FC<ICustomLink> = ({children,to,...props}) => {
    const match = useMatch<string, any>(to)
  return (
    <Link to={to} {...props} style={{
        color:match?'gray':'black',
        }}>
    {children}
    </Link>
  )
}

export default CustomLink