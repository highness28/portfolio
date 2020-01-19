import styled from '@emotion/styled'

const Parallax = styled.div(({ background, height }) => ({
    backgroundImage: `url('${background}')`,
    height: height ? height : 'calc(100vh - 60px)',
    width: '100%',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%'
}))

export default Parallax