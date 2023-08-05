import { useNavigate, useParams } from "react-router-dom"
import { obtenerUserByName } from "../../../api/user"
import { useEffect, useState } from "react"
import { User } from "../../../types"
import { useValidarURL } from "../../../hooks/useValidarURL"

export default function Index(){
    return (
        <div>
            Index
        </div>
    )
}