import {useEffect, useState} from "react";
import { ProjectData, ProjectDescriptor } from "../Types/types";
import { overviews, projects } from "../Projects/ProjectData";
import { useParams } from "react-router-dom";

// Custom hook for pulling proper data for projects
export default function useProject() {
    const {id} = useParams<string>();
    const [loading, setLoading] = useState<boolean>(true);
    const [overview, setOverview] = useState<ProjectDescriptor>();
    const [project, setProject] = useState<ProjectData>();

    // Loading is only completed when overview and project are properly loaded
    useEffect(() => {
        if (overview && project) {
            window.scrollTo(0,0);
            setLoading(false);
        }
    },[project, id, overview])

    useEffect(() => {

        if (id) {
            setProject(projects[Number(id)]);
            setOverview(overviews[Number(id)]);
        }
    }, [project, id, loading]);

    return {loading, project, overview};
}