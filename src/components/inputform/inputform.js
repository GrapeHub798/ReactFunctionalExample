import React, { useState } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap'

const InputForm = ({ doSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            search();
        }
    }

    const search = () => {
        if (!searchTerm) {
            return;
        }

        doSearch(searchTerm);
    }

    return (
        <>
            <Row className="m-3">
                <Col md="8">
                    <Form.Control type="text" value={searchTerm} name="searchTerm" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for Images" onKeyDown={_handleKeyDown} />
                </Col>
                <Col md="4">
                    <Button variant="primary" onClick={search}>Search</Button>
                </Col>
            </Row>
        </>
    )
}

export default InputForm;