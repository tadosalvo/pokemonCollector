import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getCards } from '../actions/cardActions'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SearchBar from '../components/SearchBar';

const useStyles = makeStyles((theme) => ({

}));

const Homescreen = (props) => {
    


    return (
        <div>

            <SearchBar/>

        </div>
    )

}

export default Homescreen