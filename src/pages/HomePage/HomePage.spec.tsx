// Libs
import { render } from '@testing-library/react'
// Self
import { HomePage } from './HomePage'
import { 
  useShopCartHook 
} from '../../context/ShopCartContext/ShopCartContext';
// Mocks
import { products } from '../../common/mocks';

const mockedShopCartContext = useShopCartHook as jest.Mock

jest.mock('../../context/ShopCartContext/ShopCartContext')

describe('<HomePage />', () => {
  beforeEach(() => {
    mockedShopCartContext.mockReturnValue({
      shopCart: products,
      setShopCart: jest.fn(),
    })
  })

  test('HomePage page render', () => {
    render(<HomePage />)
  })
})
