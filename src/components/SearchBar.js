import React from 'react'
import { getCards } from '../actions/cardActions'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        marginLeft: 550,
        marginTop: 30
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const SearchBar = (props) => {
    const classes = useStyles();

    const {text, setText, setCardState, data, dispatch} = props

    const handleChange = (event) => {
        event.preventDefault();
        setText(event.target.value)
    }

    const onSubmit = (event) => {

        event.preventDefault();
        dispatch(getCards(text))
        setCardState(data)
        console.log(data[0])
        
    }

    return (
        <div>

            <Paper component="form" className={classes.root}>

                <InputBase
                    onChange={handleChange}
                    className={classes.input}
                    placeholder="Search For Pokemon Card"
                    inputProps={{ 'aria-label': 'search pokemon' }}
                />
                <IconButton onClick={onSubmit} type="click" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <Divider className={classes.divider} orientation="vertical" />

            </Paper>

        </div>
      );
}

export default SearchBar
