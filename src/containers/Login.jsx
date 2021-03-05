import React, { useState } from 'react';
import '../assets/styles/containers/Login.scss';
import '../assets/styles/commons/Common.scss';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import CartTranslate from '../../i18n';
import loginRequest from '../actions/App';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link to='/' className='body2 textSecondary underlineHover'>
        {CartTranslate.t('app.appName')}
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    // para no mandar los parametros por url
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          {CartTranslate.t('app.signIn')}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label={CartTranslate.t('app.email')}
            name='email'
            autoComplete='email'
            autoFocus
            onChange={handleInput}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label={CartTranslate.t('app.password')}
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={handleInput}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label={CartTranslate.t('signIn.rememberMe')}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            {CartTranslate.t('app.signIn')}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to='/forgot' className='body2 underlineHover'>
                {CartTranslate.t('signIn.forgot')}
              </Link>
            </Grid>
            <Grid item>
              <Link to='/signup' className='body2 underlineHover'>
                {CartTranslate.t('app.signUp')}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );

};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
