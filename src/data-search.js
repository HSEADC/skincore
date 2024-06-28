import Airtable from 'airtable'

const token =
  'patdoxuhCUQ3CbGAf.507bb1b800d0d8f4427f87bfd694ca314f086ef093010c6e3e7e3262ff862fb5'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})

let base = Airtable.base('app4QpCmatGzmtnxW')

function getPostTeasers() {
  return new Promise((resolve, reject) => {
    const content = []

    base('teasers')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            tags: record.fields['Tags'],
            image: record.fields['Image'],
            title: record.fields['Title'],
            description: record.fields['Description'],
            url: record.fields['URL']
          })
        })

        resolve(content)
      })
    console.log(content)
  })
}

export { getPostTeasers }