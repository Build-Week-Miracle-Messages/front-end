import React from "react"
import CaseList from "../caseComponents/CaseList"
import {Nav} from "./Nav";
import Header from "./Header";
import CreateNewCase from "./../caseComponents/CreateCaseForm"

export default function LoggedIn(){
    return (
        <div>
            <Header />
            <Nav />
            <CaseList />
            <CreateNewCase />
        </div>
    )
}