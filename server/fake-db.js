const Product = require('./model/product')


class FakeDb {
  constructor() {
    this.products = [
      {
        coverImage: "./assets/img/phone-cover.jpg",
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heading1: 'testtest',
        heading2: 'testtest',
        heading3: 'dammytext',
        headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
        headingtext2: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
        headingtext3: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト'
      },
      {
        coverImage: "./assets/img/phone-cover.jpg",
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heading1: 'testtest',
        heading2: 'testtest',
        heading3: 'dammytext',
        headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
        headingtext2: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
        headingtext3: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト'
      },
      {
        coverImage: "./assets/img/phone-cover.jpg",
        name: 'Phone Standard',
        price: 299,
        description: '',
        heading1: 'testtest',
        heading2: 'testtest',
        heading3: 'dammytext',
        headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
        headingtext2: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
        headingtext3: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト'
      },
      {
        coverImage: "./assets/img/phone-cover.jpg",
        name: 'Phone Special',
        price: 999,
        description: '',
        heading1: 'testtest',
        heading2: 'testtest',
        heading3: 'dammytext',
        headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
        headingtext2: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
        headingtext3: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト'
      }
    ]
  }

  async initDb() {
    await this.cleanDb()
    this.pushProductsToDb()
  }

  async cleanDb() {
    await Product.deleteMany({})
  }

  pushProductsToDb() {
    this.products.forEach(
      (product) => {
        const newProduct = new product(product)
        newProdut.save()
      }
    )
  }

  SeeDB() {
    this.pushProductsToDb()
  }
}

module.exports = FakeDb
