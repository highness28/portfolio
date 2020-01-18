import styled from '@emotion/styled'
import avatar from '../assets/images/avatar.jpg'

const Avatar = styled.div(({ size='sm' }) => ({
  backgroundImage: `url(${avatar})`,
  backgroundSize: 'cover',
  borderRadius: 205,
  height: styles.height[size],
  width: styles.width[size],
}))

const styles = {
  height: {
    xs: 50,
    sm: 100,
    md: 200,
    lg: 400,
  },
  width: {
    xs: 50,
    sm: 100,
    md: 200,
    lg: 400,
  },
}

export default Avatar