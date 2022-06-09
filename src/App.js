import categories from './categories.json'
import Categories from './components/categories/categories'

const App = () => {
  return (
    <div className='categories-container'>
      <Categories categories={categories} />
    </div>
  )
}

export default App
