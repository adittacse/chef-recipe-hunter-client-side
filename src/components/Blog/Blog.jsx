import React, {useRef} from 'react';
import {Page, Text, View, Document, StyleSheet, PDFDownloadLink} from "@react-pdf/renderer";
import PDFFile from "./PDFFile";
import ReactToPrint from "react-to-print";
import DisplayBlog from "./DisplayBlog.jsx";

const Blog = () => {
    const ref = useRef();
    
    return (
        <div className="container mt-4">
            <div className="d-flex mx-auto justify-content-center">
                <ReactToPrint
                    trigger={() => <button className="btn btn-secondary me-3">Print Blog</button>}
                    content={() => ref.current}
                ></ReactToPrint>
                <PDFDownloadLink document={<PDFFile />} filename="FORM">
                    <button className="btn btn-secondary">Download Blog</button>
                </PDFDownloadLink>
            </div>
            <div ref={ref}>
                <DisplayBlog></DisplayBlog>
            </div>
        </div>
    );
};

export default Blog;