import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link } from "react-router-dom";
import Modal from 'react-modal';
import Button from '@mui/material/Button';
import 'react-toastify/dist/ReactToastify.css'; 
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

function BlogInfo(props) {
    const [blogsData, setBlogsData] = React.useState([]);
    const [selectedIndex, setSelectedIndex] = React.useState(-1);
    
    const customStyles = {
        content: {
          top: '30%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      Modal.setAppElement('#myappelement');

      function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
      }
    
      function closeModal() {
        setSelectedIndex(-1);
        setIsOpen(false);
      }

      const addNewBlogInfo = () => {

      };

    const [modalIsOpen, setIsOpen] = React.useState(false);
    
    const onUpdateClick = (id) => {
        const bdata = [...blogsData];
        let row = null;
        for (let i = 0; i < bdata.length; i++) {
            if(bdata[i].id == id) {
                row = bdata[i];
                break;
            }
        }
        formik.values.title = row.title;
        formik.values.subTitle = row.subTitle;
        formik.values.author = row.author;
        setSelectedIndex(id);
        openModal();
    }

    const onDeleteClick = (id) => {
        const bdata = [...blogsData];
        for (let i = 0; i < bdata.length; i++) {
            if(bdata[i].id == id) {
                bdata.splice(i, 1);
                break;
            }
        }
        setBlogsData(bdata);
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70, type: 'number', valueGetter: (params) =>
                                    `${params.row.id || ''}`,},
        { field: 'title', headerName: 'title', width: 130, valueGetter: (params) =>
                                                            `${params.row.title || ''}`,},
        { field: 'subTitle', headerName: 'Sub-Title', width: 130, valueGetter: (params) =>
                                            `${params.row.subTitle || ''}`,},
        { field: 'author', headerName: 'Author', width: 130, valueGetter: (params) =>
                                            `${params.row.author || ''}`,},
        { field: 'action', headerName: 'Action', width: 160, renderCell: (params) => { return (
                                                                                        <>
                                                                                        <Button onClick={() => {
                                                                                            onUpdateClick(params.row.id);
                                                                                        }}>Update</Button>
                                                                                        <Button onClick={() => {
                                                                                            onDeleteClick(params.row.id);
                                                                                        }}>Delete</Button>
                                                                                        </>
                                                                                    ) }},
      ];
      
      

    const validationSchema = yup.object({
        title: yup
          .string('Enter title')
          .required('Title is required'),
        subTitle: yup
          .string('Enter subtitle'),
        author: yup
          .string('Enter author name')
          .required('Author is required'),
      });
  
      const formik = useFormik({
        initialValues: {
            title: '',
            subTitle: '',
            author: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const title = values["title"];
            const subTitle = values["subTitle"];
            const author = values["author"];
            if (selectedIndex > 0) {
                const bdata = [...blogsData];
                for (let i = 0; i < bdata.length; i++) {
                    if(bdata[i].id == selectedIndex) {
                        bdata[i].title = title;
                        bdata[i].subTitle = subTitle;
                        bdata[i].author = author;
                        break;
                    }
                }
                setBlogsData(bdata);
                closeModal();
                return;
            }
            
            setBlogsData([...blogsData, {"id": blogsData.length + 1, "title": title, "subTitle":subTitle, "author": author}]);
            closeModal();
        },
      });

    return (
        <div>
            <Button onClick={openModal} variant="contained">Add Blog Info</Button>
            
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <form onSubmit={formik.handleSubmit} style={{border: 'solid 1px', borderRadius: '8px', padding:'10px'}}>
                    <TextField
                        id="title"
                        type="text"
                        name="title"
                        label="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}
                        />
                    <br/>
                    <TextField
                        id="subTitle"
                        type="text"
                        name="subTitle"
                        label="subTitle"
                        value={formik.values.subTitle}
                        onChange={formik.handleChange}
                        error={formik.touched.subTitle && Boolean(formik.errors.subTitle)}
                        helperText={formik.touched.subTitle && formik.errors.subTitle}
                        />
                    <br/>
                    <TextField
                        id="author"
                        type="text"
                        name="author"
                        label="author"
                        value={formik.values.author}
                        onChange={formik.handleChange}
                        error={formik.touched.author && Boolean(formik.errors.author)}
                        helperText={formik.touched.author && formik.errors.author}
                        />
                        <br/>
                        <Button type="submit"
                            className="mt-2" style={{marginBottom: '8px', border: '1px solid', borderColor:'#2E76E5'}}>
                            {selectedIndex > 0 ? "Update Info" : "Add Info"}
                        </Button>
                    </form>
                </Modal>
                
                <div style={{ height: 400, width: '60%', marginLeft:"auto", marginRight:"auto", marginTop: '20%' }}>
                <DataGrid
                    rows={blogsData}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                    }}
                    pageSizeOptions={[5, 10]}
                />
                </div>
        </div>
    );
};

export default BlogInfo;