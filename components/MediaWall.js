import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MediaCard from './MediaCard';
import Container from '@material-ui/core/Container';
import LayoutDrawer from '../containers/LayoutDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    appBar: {
        width: '88%',
        marginLeft: '75px',
        marginTop: '20px',
        marginBottom: '20px',
        borderRadius: theme.shape.borderRadius,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    select: {
        width: '280px',
        height: '38px',
        marginLeft: '10px',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        border: 0,
        borderRadius: theme.shape.borderRadius,
    },
    stepper: {
        marginLeft: '120px',
        backgroundColor: 'inherit',
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        fontSize: '16px',
        color: '#ffffff',
    },
}));

export default function MediaWall() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const [maxSteps, setMaxSteps] = React.useState(1);

    const handleNext = () => {
        // props.updateFeature(activeStep + 1);
        // setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        // props.updateFeature(activeStep - 1);
        // setActiveStep(activeStep - 1);
    };


    return (
        <LayoutDrawer>
            <Container>
                <Grid container className={classes.root} spacing={4}>
                    <AppBar position="static" className={classes.appBar}>
                        <Toolbar>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>

                            <Typography style={{ fontSize: '18px', marginLeft: '30px' }} >Sort By:</Typography>
                            <TextField
                                id="standard-select-currency"
                                select
                                // label={}
                                //   value={currency}
                                //   onChange={handleChange}

                                className={classes.select}
                            >
                                {['Rating', 'Relevance', 'Upload Date'].map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {/* {option.label} */}
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>

                            <MobileStepper
                                className={classes.stepper}
                                steps={maxSteps}
                                position="static"
                                variant="text"
                                activeStep={activeStep}
                                backButton={
                                    <Button size="large" onClick={() => handleBack()} disabled={activeStep === 0}>
                                        {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft />}
                                    </Button>
                                }
                                nextButton={
                                    <Button size="large" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                    </Button>
                                }
                            />
                        </Toolbar>
                    </AppBar>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={4}>
                            {[0, 1, 2, 4, 5, 6].map(value => (
                                <Grid key={value} item>
                                    <MediaCard />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </LayoutDrawer>
    );
}