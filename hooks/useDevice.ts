import {isDesktop, isMobile} from 'react-device-detect'

interface DeviceDetection {
  isMobile: boolean;
  isDesktop: boolean
}

const useDevice = (): DeviceDetection => ({
  isDesktop,
  isMobile
})

export default useDevice;
