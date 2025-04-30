import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  space: "y69zpnzih3av",
  environment: "master",
  accessToken: "2k1D1R0zteqvLuCRAfD9DQYvpVx_4tmLMXfAfQgcBPY",
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, id, url, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
