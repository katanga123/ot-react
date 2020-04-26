import React from 'react';
import { Link } from 'react-router-dom'

import Search from '../Widgets/SearchComponent'
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'

const ExamPage = () => {
    return (
        <div className="ot-exam-page-container py2 container mx-auto">
            <h2 className="ot-header">Computer Programming</h2>
            <Search placeholder={"Search"} />

            <div className="ot-exam-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">

                <div className="ot-exams  bg-white rounded-lg p-4 hover:shadow-lg active:shadow-xl cursor-pointer relative">
                    <FontAwesomeIcon icon={faCircle} className="absolute top-0 right-0 mt-3 mr-3 text-gray-600" />
                    <Link to="" className="flex justify-start items-center">
                        <div className="icons mr-3">
                            <FontAwesomeIcon icon={faFile} className="text-gray-600" size="2x" />
                        </div>
                        <div className="exam-name mr-3">
                            <h4 className="text-gray-600 font-semibold">Prelim Exam</h4>
                        </div>
                    </Link>
                </div>

                <div className="ot-exams  bg-white rounded-lg p-4 hover:shadow-lg active:shadow-xl cursor-pointer relative">
                    <FontAwesomeIcon icon={faCircle} className="absolute top-0 right-0 mt-3 mr-3 text-red-400" />
                    <Link to="" className="flex justify-start items-center">
                        <div className="icons mr-3">
                            <FontAwesomeIcon icon={faFile} className="text-gray-600" size="2x" />
                        </div>
                        <div className="exam-name mr-3">
                            <h4 className="text-gray-600 font-semibold">Long Test Exam</h4>
                        </div>
                    </Link>
                </div>

                <div className="ot-exams  bg-white rounded-lg p-4 hover:shadow-lg active:shadow-xl cursor-pointer relative">
                    <FontAwesomeIcon icon={faCircle} className="absolute top-0 right-0 mt-3 mr-3 text-green-400" />
                    <Link to="" className="flex justify-start items-center">
                        <div className="icons mr-3">
                            <FontAwesomeIcon icon={faFile} className="text-gray-600" size="2x" />
                        </div>
                        <div className="exam-name mr-3">
                            <h4 className="text-gray-600 font-semibold">Midterm Exam</h4>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default ExamPage