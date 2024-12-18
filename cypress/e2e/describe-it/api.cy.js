/// <reference types ="cypress" />

describe('Api Testing', () => {
    it('http requests', () => {
    //    cy.request(url)
    // cy.request(method,url)
    // cy.request(method,url,body)

        // Get Request 
        cy.request("https://jsonplaceholder.typicode.com/users")

        // get all posts
        cy.request("https://jsonplaceholder.typicode.com/posts")

          // get  posts 10
          cy.request("https://jsonplaceholder.typicode.com/posts/10")

          // create new data (post)
          cy.request("POST","https://jsonplaceholder.typicode.com/posts",{"userId":99,"id":101,"title": "my title","body":"my first post"})
    
          // delete exiting data 
          cy.request("DELETE","https://jsonplaceholder.typicode.com/posts/12")

          // update exiting data 
          cy.request("PUT","https://jsonplaceholder.typicode.com/posts/12",{"title":"my title"})

          // assertion -> explicit assertion expect 
          cy.request("https://jsonplaceholder.typicode.com/users/2").then((responseData)=>{
                // cypress api testing 
                // to check the response code 
                expect(responseData.status).to.eq(200)
                expect(responseData.body.email).to.eq("Shanna@melissa.tv")
                expect(responseData.body.name).to.contain("Ervin")
                expect(responseData.body.address.street).to.contain("Victor Plains")
          })
        
        });


    it('http requests and response', () => {
        cy.request("https://reqres.in/api/unknown/2").then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.data.name).to.contain("fuchsia rose")
            expect(response.body.data.id).to.eq(2)
            expect(response.body.data.year).to.eq(2001)
            expect(response.body.support.text).to.contain("Tired of writing")

        })

       

    });

    it.only('', () => {
        cy.request("POST","https://reqres.in/api/users",{
            "name": "morpheus",
            "job": "leader"
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.name).to.eq("morpheus")
            expect(res.body.job).to.eq("leader")
            expect(res.body.id).to.eq("659")
        })
    });

    
});