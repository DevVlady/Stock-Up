import React from 'react'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "../../assets/jss/material-dashboard/footerStyle"

const useStyles = makeStyles(styles);

export default function Footer(props) {
    const classes = useStyles();
    return (
        <footer>
            <div className={classes.footer}>
                <div className={classes.container}>
                    <div className={classes.left}>
                        <List classname={classes.list}>
                            <ListItem className={classes.inlineBlock}>
                                <a href="#home" className={classes.block}>
                                    Home
                                </a>
                            </ListItem>
                        </List>

                    </div>
                </div>
            </div>

        
        </footer>
    )
}