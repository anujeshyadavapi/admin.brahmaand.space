import React from "react";
import { Card, CardBody, Input, Row, Col, Button, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, } from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Eye, Edit, Trash2, ChevronDown } from "react-feather";
//import classnames from "classnames";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import { Route } from "react-router-dom";
// import Calendar from "../../calendar/Calendar";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


class WeeklyWinner extends React.Component {
    state = {
        rowData: [],
        paginationPageSize: 20,
        currenPageSize: "",
        getPageSize: "",
        value: "",
        defaultColDef: {
            sortable: true,
            editable: true,
            resizable: true,
            suppressMenu: true,
        },


        columnDefs: [
            {
                headerName: "S.No",
                valueGetter: "node.rowIndex + 1",
                field: "node.rowIndex + 1",
                width: 150,
                pinned: window.innerWidth > 992 ? "left" : false,
                // filter: true,
                // checkboxSelection: true,
                // headerCheckboxSelectionFilteredOnly: true,
                // headerCheckboxSelection: true,
            },
            {
                headerName: "Name",
                field: "name",
                // filter: true,
                width: 150,
                // pinned: window.innerWidth > 992 ? "left" : false,
                cellRendererFramework: (params) => {
                    return (
                        <div className="d-flex align-items-center cursor-pointer">
                            <span>{params.data.name}</span>
                        </div>
                    );
                },
            },


            {
                headerName: "Current Month Point",
                field: "title",
                // filter: true,
                width: 150,
                // pinned: window.innerWidth > 992 ? "left" : false,
                cellRendererFramework: (params) => {
                    return (
                        <div className="d-flex align-items-center cursor-pointer">
                            <span>{params.data.title}</span>
                        </div>
                    );
                },
            },
            {
                headerName: "All Time Point",
                field: "desc",
                // filter: true,
                width: 150,
                // pinned: window.innerWidth > 992 ? "left" : false,
                cellRendererFramework: (params) => {
                    return (
                        <div className="d-flex align-items-center cursor-pointer">
                            <span>{params.data.desc}</span>
                        </div>
                    );
                },
            },
            {
                headerName: "Image",
                field: "file",
                // filter: true,
                width: 150,
                // pinned: window.innerWidth > 992 ? "left" : false,
                cellRendererFramework: (params) => {
                    return (
                        <img className=" d-flex align-items-center cursor-pointer w-50 h-50 rounded" src={params.data.cat_img} />

                    );
                },
            },
            {
                headerName: "Planet Position",
                field: "desc",
                // filter: true,
                width: 150,
                // pinned: window.innerWidth > 992 ? "left" : false,
                cellRendererFramework: (params) => {
                    return (
                        <div className="d-flex align-items-center cursor-pointer">
                            <span>{params.data.desc}</span>
                        </div>
                    );
                },
            },
            {
                headerName: "Date",
                field: "desc",
                // filter: true,
                width: 150,
                // pinned: window.innerWidth > 992 ? "left" : false,
                cellRendererFramework: (params) => {
                    return (
                        <div className="d-flex align-items-center cursor-pointer">
                            <span>{params.data.desc}</span>
                        </div>
                    );
                },
            },

            {
                headerName: "Actions",
                field: "sortorder",
                width: 150,
                // pinned: window.innerWidth > 992 ? "right" : false,
                cellRendererFramework: (params) => {
                    return (
                        <div className="actions cursor-pointer">
                            <Route
                                render={({ history }) => (
                                    <Edit
                                        className="mr-50"
                                        size="25px"
                                        color="blue"
                                        onClick={() =>
                                            history.push(
                                                `/app/brahmaand/leaderboard/editLeader/${params.data._id}`
                                            )
                                        }
                                    />
                                )}
                            />

                            <Trash2
                                className="mr-50"
                                size="25px"
                                color="red"
                                onClick={() => {
                                    let selectedData = this.gridApi.getSelectedRows();
                                    this.runthisfunction(params.data._id);
                                    this.gridApi.updateRowData({ remove: selectedData });
                                }}
                            />
                        </div>
                    );
                },
            },
        ],
    };

    async componentDidMount() {
        await axiosConfig
            .get("/get_startup", {

            })
            .then((response) => {
                const rowData = response.data.data;
                console.log(rowData);
                this.setState({ rowData });
            });
    }
    async runthisfunction(id) {
        console.log(id);
        await axiosConfig.get(`/dlt_startup/${id}`).then(
            (response) => {
                console.log(response);
            },
            (error) => {
                console.log(error);
            }
        );
    }
    onGridReady = (params) => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.setState({
            currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
            getPageSize: this.gridApi.paginationGetPageSize(),
            totalPages: this.gridApi.paginationGetTotalPages(),
        });
    };

    updateSearchQuery = (val) => {
        this.gridApi.setQuickFilter(val);
    };

    filterSize = (val) => {
        if (this.gridApi) {
            this.gridApi.paginationSetPageSize(Number(val));
            this.setState({
                currenPageSize: val,
                getPageSize: val,
            });
        }
    };

    render() {

        const { rowData, columnDefs, defaultColDef } = this.state;
        return (
            console.log(rowData),
            (
                <Row sm="12">
                    <Col>
                        <Card>
                            <Row className="m-2">
                                <Col sm="6" className="tb">
                                    <h1 className="float-left">
                                        Weekly Winner List
                                    </h1>
                                </Col>
                                <Col style={{ marginLeft: "15rem" }}>

                                    <h5>Start Date</h5>
                                    <Input className="btn btn-success"
                                        required
                                        type="date"
                                        name="date"
                                        placeholder="Enter name"
                                        value={this.state.date}
                                        onChange={this.changeHandler}
                                    ></Input>
                                </Col>
                                <Col> <h5>End Date</h5>
                                    <Input className="btn btn-success"
                                        required
                                        type="date"
                                        name="date"
                                        placeholder="Enter name"
                                        value={this.state.date}
                                        onChange={this.changeHandler}
                                    ></Input>

                                </Col>
                                <Col >
                                    {/* <Route
                                        render={({ history }) => (
                                            // <Button
                                            //     className="btn btn-success float-right"
                                            //     onClick={() =>
                                            //         history.push("/app/brahmaand/leaderboard/weeklyWinner")
                                            //     }
                                            // >
                                            //     Choose Winner
                                            // </Button>
                                        )}
                                    /> */}
                                </Col>
                            </Row>
                            <CardBody>
                                {this.state.rowData === null ? null : (
                                    <div className="ag-theme-material w-100 my-2 ag-grid-table">
                                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                                            <div className="mb-1">
                                                <UncontrolledDropdown className="p-1 ag-dropdown">
                                                    <DropdownToggle tag="div">
                                                        {this.gridApi
                                                            ? this.state.currenPageSize
                                                            : "" * this.state.getPageSize -
                                                            (this.state.getPageSize - 1)}{" "}
                                                        -{" "}
                                                        {this.state.rowData.length -
                                                            this.state.currenPageSize *
                                                            this.state.getPageSize >
                                                            0
                                                            ? this.state.currenPageSize *
                                                            this.state.getPageSize
                                                            : this.state.rowData.length}{" "}
                                                        of {this.state.rowData.length}
                                                        <ChevronDown className="ml-50" size={15} />
                                                    </DropdownToggle>
                                                    <DropdownMenu right>
                                                        <DropdownItem
                                                            tag="div"
                                                            onClick={() => this.filterSize(20)}
                                                        >
                                                            20
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            tag="div"
                                                            onClick={() => this.filterSize(50)}
                                                        >
                                                            50
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            tag="div"
                                                            onClick={() => this.filterSize(100)}
                                                        >
                                                            100
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            tag="div"
                                                            onClick={() => this.filterSize(134)}
                                                        >
                                                            134
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </div>
                                            <div className="d-flex flex-wrap justify-content-between mb-1">
                                                <div className="table-input mr-1">
                                                    <Input
                                                        placeholder="search..."
                                                        onChange={(e) =>
                                                            this.updateSearchQuery(e.target.value)
                                                        }
                                                        value={this.state.value}
                                                    />
                                                </div>
                                                <div className="export-btn">
                                                    <Button.Ripple
                                                        color="primary"
                                                        onClick={() => this.gridApi.exportDataAsCsv()}
                                                    >
                                                        Export as CSV
                                                    </Button.Ripple>
                                                </div>
                                            </div>
                                        </div>
                                        <ContextLayout.Consumer>
                                            {(context) => (
                                                <AgGridReact
                                                    gridOptions={{}}
                                                    rowSelection="multiple"
                                                    defaultColDef={defaultColDef}
                                                    columnDefs={columnDefs}
                                                    rowData={rowData}
                                                    onGridReady={this.onGridReady}
                                                    colResizeDefault={"shift"}
                                                    animateRows={true}
                                                    floatingFilter={false}
                                                    pagination={true}
                                                    paginationPageSize={this.state.paginationPageSize}
                                                    pivotPanelShow="always"
                                                    enableRtl={context.state.direction === "rtl"}
                                                />
                                            )}
                                        </ContextLayout.Consumer>
                                    </div>
                                )}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            )
        );
    }
}
export default WeeklyWinner;
