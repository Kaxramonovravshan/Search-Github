import React from 'react';
import {IRepo} from "../moduls/models";

function RepoCard({repo}:{repo:IRepo}) {
    return (
        <div className="border hover:text-white py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-500 transition-all">
            <a href={repo.html_url} target={"_blank"}>
                <h2 className="text-center mb-4 font-bold">{repo.full_name}</h2>
                <p className="text-sm">
                    Forks: <span className="font-bold mr-2">{repo.forks}</span>
                    Watchers: <span className="font-bold">{repo.watchers}</span>
                </p>
                <p className="text-sm font-thin">
                    {repo?.description}
                </p>
            </a>
        </div>
    );
}

export default RepoCard;