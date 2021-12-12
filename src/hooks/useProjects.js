import axios from "axios";
import { useEffect, useState } from "react";
// create useProjects hook
const useProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const url = "/projectsData.JSON";
    axios.get(url)
    .then(res=>{
        setProjects(res.data);
    })
    /* fetch(url)
      .then((res) => res.json())
      .then((data) => setProjects(data)); */
  }, []);
  return [projects, setProjects];
};

export default useProjects;
