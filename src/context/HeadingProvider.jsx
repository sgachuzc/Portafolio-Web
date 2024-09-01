import { useState } from "react"
import { HeadingContext } from "./HeadingContext";

// eslint-disable-next-line react/prop-types
export const HeadingProvider = ({ children }) => {

  const [title, setTitle] = useState(false);

  return (
    <HeadingContext.Provider value={{ title, setTitle}}>
      { children }
    </HeadingContext.Provider>
  )
}
