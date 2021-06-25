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

const Homescreen = (props) => {
    const classes = useStyles();


    const [text, setText] = useState("")
    const [cardState, setCardState] = useState([])

    const dispatch = useDispatch();
    const cardList = useSelector((state) => {
        return state.cardList
    })

    const { loading, cards, error } = cardList
    const {data} = cards; 

    useEffect(() => {
        
    }, [dispatch]);

    const handleChange = (event) => {
        event.preventDefault();
        setText(event.target.value)
        console.log(data)
        
    }

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(getCards(text))
        setCardState(data)
        

    }


    return (
        <div>

            <Paper component="form" className={classes.root}>


                <InputBase
                    onChange={handleChange}
                    className={classes.input}
                    placeholder="Search For Pokemon Card"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton onClick={onSubmit} type="click" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <Divider className={classes.divider} orientation="vertical" />

            </Paper>

            {loading ? <h1>loading..</h1> : error ? <h1>error...</h1> : data.map((item) => {
                return <h1>hello...</h1>
            })}

        </div>
    )

}

export default Homescreen