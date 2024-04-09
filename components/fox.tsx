import FoxLogo from './fox.svg'
import Image from 'next/image'

// interface Props extends React.ComponentPropsWithoutRef<'svg'> {
  
// }
interface Props{
  className: string
}

export const Fox: React.FC<Props> = (props:Props) => {
  return (
    <div {...props}>
      <Image src={FoxLogo} alt='Fox logo' />
    </div>
  )
}
