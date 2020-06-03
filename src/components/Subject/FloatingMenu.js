import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'


import UrlService from '../../services/UrlService'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Toast = MySwal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
})


class FloatingMenu extends Component {

    handleDeleteSubject = () => (

        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            axios.delete(UrlService.subjectUrl() + '/' + this.props.id, UrlService.configContentType())
                .then(response => {

                    if (result.value) {

                        Toast.fire({
                            icon: 'success',
                            title: 'Deleted successfully'
                        })

                    }

                })
                .catch(error => {
                    Toast.fire({
                        icon: 'warning',
                        title: 'Something wrong!'
                    })
                })



        })

    )


    render() {
        return (
            <div className="absolute bg-white rounded-lg right-0 mt-2 w-20 shadow-lg z-40 flex items-center justify-around">
                <Link to={`subject/edit/` + this.props.id} className="text-blue-500 hover:text-blue-700 p-2 pl-3 pr-3 border-r-2 border-gray-200">
                    <FontAwesomeIcon icon={faPen} />
                </Link>
                <button className="text-red-500 hover:text-red-700 p-2 pr-3" onClick={this.handleDeleteSubject}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        )
    }
}

export default FloatingMenu