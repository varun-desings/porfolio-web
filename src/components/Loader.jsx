import { useProgress } from "@react-three/drei"

const Loader = () => {
    const {progress} = useProgress();
  return (
   <html center className="text-xl text-center font-normal">{progress}% loaded</html>
  )
};

export default Loader;
