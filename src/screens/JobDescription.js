import React from 'react'
import Card from '../components/Card'
import styled from '@emotion/styled'
import Avatar from '../components/Avatar'
import RoomIcon from '@material-ui/icons/Room'
import Phone from '@material-ui/icons/Phone'
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Flex = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})

const TextContainer = styled.div({
    alignItems: 'center',
    color: '#696969',
    display: 'flex',
    fontSize: '15px',
    lineHeight: '1.4',
})

const Container = styled(Card)({
    width: 350,
    position: 'fixed',
    top: 110,
    left: 50,
    color: '#191919',
    padding: '25px 10px'
})

const JobDescription = () => (
    <Container>
        <Flex>
            <Avatar size='sm' />
        </Flex>
        <Flex>
            <h2 style={{ marginBlockStart: '0.5em', marginBlockEnd: '0.5em' }}>German Manalili</h2>
        </Flex>

        <Flex style={{ margin: '15px 0' }}>
            <TextContainer>
                <b>Full Stack Web Developer</b>
            </TextContainer>
            <TextContainer>
                <RoomIcon style={{ fontSize: 15 }} /> Invento Software Solutions Inc.
            </TextContainer>
        </Flex>

        <Flex style={{ margin: '15px 0' }}>
            <TextContainer>
                <b>Technical Manager</b>
            </TextContainer>
            <TextContainer>
                <RoomIcon style={{ fontSize: 15 }} /> Novus Software Solution Inc.
            </TextContainer>
        </Flex>

        <Flex style={{ margin: '15px 0' }}>
            <TextContainer>
                <Phone style={{ fontSize: 15 }} /> 0956-710-8147
            </TextContainer>
        </Flex>

        <Flex style={{ margin: '15px 0' }}>
            <TextContainer>
                <MailOutlineIcon style={{ fontSize: 15 }} /> manaliligerman@yahoo.com
            </TextContainer>
        </Flex>

        <Flex style={{ margin: '15px 0' }}>
            <TextContainer>
                <a href='https://www.linkedin.com/in/german-manalili-68ba6b133' style={{ textDecoration: 'none', color: 'skyBlue' }}>Linked Profile</a>
            </TextContainer>
            <TextContainer>
                <a href='https://www.facebook.com/Highness28' style={{ textDecoration: 'none', color: 'skyBlue' }}>Facebook Profile</a>
            </TextContainer>
        </Flex>

        <Flex style={{ margin: '15px 0', paddingLeft: '50px', paddingRight: '30px' }}>
            <TextContainer style={{ alignSelf: 'flex-start' }}>
                <span style={{
                    fontFamily: `"acumin-pro","Acumin Pro","Helvetica Neue",Helvetica,Arial,sans-serif`,
                    fontSize: 11,
                    fontWeight: '700'
                }}>
                    ABOUT ME
                </span>
            </TextContainer>
            <TextContainer style={{ alignSelf: 'flex-start' }}>
                <p style={{ textAlign: 'justify' }}>
                    I love eating chicken! seriously! I can eat two whole chickens in just one sitting!
                    I think every week my stomach craves for unlimited buffalo chicken wings. I also
                    love singing! we can do karaoke bondings some time if you would like to.
                </p>
            </TextContainer>
        </Flex>
    </Container>
)

export default JobDescription