import React from 'react';
import { Link } from 'react-router-dom'

import Search from '../Widgets/SearchComponent'
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-regular-svg-icons'

const HomePage = () => {
    return (
        <div className="ot-home-page-container py2 container mx-auto">
            <h2 className="ot-header">My Subjects</h2>
            <Search placeholder={"Type subject name"} />

            {/* Subjects */}
            <div className="ot-subjects-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">

                <div className="ot-subjects  bg-white rounded-lg p-6 hover:shadow-lg active:shadow-xl">
                    <Link to="subject/1" className="flex justify-start items-center text-left">
                        <div className="icons mr-3">
                            <FontAwesomeIcon icon={faFolder} className="text-gray-600" size="2x" />
                        </div>
                        <div className="subject-name mr-3 text-left">
                            <h4 className="text-gray-600 font-semibold">System Architecture and System Integration</h4>
                        </div>
                        <div className="more">
                            <FontAwesomeIcon icon={faEllipsisV} className="text-lg ot-gray-300 cursor-pointer" />
                        </div>
                    </Link>
                </div>

                <div className="ot-subjects  bg-white rounded-lg p-6 hover:shadow-lg active:shadow-xl">
                    <Link to="subject/2" className="flex justify-between items-center text-left">
                        <div className="icons mr-3">
                            <FontAwesomeIcon icon={faFolder} className="text-gray-600" size="2x" />
                        </div>
                        <div className="subject-name mr-3 ">
                            <h4 className="text-gray-600 font-semibold">System Architecture and System Integration</h4>
                        </div>
                        <div className="more">
                            <FontAwesomeIcon icon={faEllipsisV} className="text-lg ot-gray-300 cursor-pointer" />
                        </div>
                    </Link>
                </div>

                <div className="ot-subjects  bg-white rounded-lg p-6 hover:shadow-lg active:shadow-xl">
                    <Link to="subject/3" className="flex justify-between items-center text-left">
                        <div className="icons mr-3">
                            <FontAwesomeIcon icon={faFolder} className="text-gray-600" size="2x" />
                        </div>
                        <div className="subject-name mr-3 text-left">
                            <h4 className="text-gray-600 font-semibold">Computer Programming with Object Oriented Programming</h4>
                        </div>
                        <div className="more">
                            <FontAwesomeIcon icon={faEllipsisV} className="text-lg ot-gray-300 cursor-pointer" />
                        </div>
                    </Link>
                </div>

                <div className="ot-subjects  bg-white rounded-lg p-6 hover:shadow-lg active:shadow-xl">
                    <Link to="subject/4" className="flex justify-between items-center text-left">
                        <div className="icons mr-3">
                            <FontAwesomeIcon icon={faFolder} className="text-gray-600" size="2x" />
                        </div>
                        <div className="subject-name mr-3 text-left">
                            <h4 className="text-gray-600 font-semibold">Cloud Computing</h4>
                        </div>
                        <div className="more">
                            <FontAwesomeIcon icon={faEllipsisV} className="text-lg ot-gray-300 cursor-pointer" />
                        </div>
                    </Link>
                </div>


            </div>
        </div>
    )
}

export default HomePage