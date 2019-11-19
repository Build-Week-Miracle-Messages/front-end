import React from "react"
import CaseList from "../caseComponents/CaseList"
import {LoggedInNav} from "./Nav";
import Header from "./Header";
import CreateNewCaseForm from "./../caseComponents/CreateCaseForm"

export default function LoggedIn(){
    return (
        <div>
            <Header />
            <LoggedInNav />
            <CaseList />
        </div>
    )
}