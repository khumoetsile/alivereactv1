import React, { useState,useContext } from 'react'
import { Jutsu } from 'react-jutsu'
import { UserContext } from '../../../../utils/UserContext'
import ButtonPrimary from '../../../minorcomponents/ButtonPrimary'
import {useRouteMatch} from 'react-router-dom'
import { Fullscreen, FullscreenExit } from 'react-bootstrap-icons';

const Call = ( props ) => {
    const [ room, setRoom ] = useState( '' )
    const [ name, setName ] = useState( '' )
    const [ call, setCall ] = useState( false )
    const [ password, setPassword ] = useState( '' )
    const { miniPlayer, toggleMiniPlayer } = useContext( UserContext );
    const match = useRouteMatch( "/main/call" )

    const handleClick = event => {
        event.preventDefault()
        if ( room && name ) setCall( true )
    }

    return (
        <div className={ `container-fluid ${ props.className }` } >
            {
                call ? (
                    <>
                    <Jutsu
                        roomName={ room }
                        displayName={ name }
                        password={ password }
                        onMeetingEnd={ () => window.location.replace( '/main/call' ) }
                        loadingComponent={ <p>loading ...</p> }
                        containerStyles={ { height: window.innerHeight, width: '100%' } }
                        errorComponent={ <p>Oops, something went wrong</p> }
                        configOverwrite={ { height: window.innerHeight } } />

                        <div className="position-absolute top-0 ">
                          {match &&  
                          <ButtonPrimary text={ miniPlayer ? <Fullscreen /> : <FullscreenExit /> } onClick={ toggleMiniPlayer }
                            title={miniPlayer ? 'FullScreen' : 'Miniplayer'} />
}                        </div>
                        </>

                ) : (
                    <>
                    <form className="full-form col-md-5 col-10 mt-4 mx-auto px-md-5 py-5 w-100" style={ { maxWidth: "400px" } }>

                        <h2 className="text-center">Meeting Details</h2>
                        <div className="mb-3">
                            <label className="form-label">Room</label>
                            <input
                                id='room'
                                type='text'
                                placeholder='Room'
                                value={ room }
                                onChange={ ( e ) => setRoom( e.target.value ) }
                                className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                id='name'
                                type='text'
                                placeholder='Name'
                                value={ name }
                                onChange={ ( e ) => setName( e.target.value ) }
                                className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password (optional)</label>
                            <input
                                id='password'
                                type='text'
                                placeholder='Password '
                                value={ password }
                                onChange={ ( e ) => setPassword( e.target.value ) }
                                className="form-control" />
                        </div>
                        <ButtonPrimary onClick={ handleClick } text="Start / Join" />
                    </form>
                  
                    </>
                )
            }
        </div>
    )
}

export default Call