
let listTask=$('#listTask')
let addbtn=$('#addbtn')
let delbtn=$('#delbtn')
let inputTask=$('#inputTask')
let clearbtn=$('#clearbtn')
let sortbtn=$('#sortbtn')

function addItem(){
  
        let text=inputTask.val()
        let listItem=$('<li>', {'class':'list-group-item', text}, '</li>')
        listItem.click(()=>{
            listItem.toggleClass('done')
        })
        listTask.append(listItem)
        inputTask.val('')
        toggleInputButtons()
    
}

function cleardone(){
    $('#listTask .done').remove()
     toggleInputButtons()
}

function sortTask(){
    $('#listTask .done').appendTo(listTask)
    toggleInputButtons()
}

function toggleInputButtons(){
    addbtn.prop('disabled',inputTask.val()=='')
    delbtn.prop('disabled',inputTask.val()=='')
    sortbtn.prop('disabled',listTask.children().length<1)
    clearbtn.prop('disabled',listTask.children().length<1)
}

inputTask.keypress((event)=>{
    if(event.which==13){                     //enter value is 13
        addItem()
    }
})

inputTask.on('input',toggleInputButtons)

addbtn.click(addItem)

delbtn.click(()=>{
    inputTask.val('')
    toggleInputButtons()
})
clearbtn.click(cleardone)
sortbtn.click(sortTask)


// addbtn.click(()=>{
//     let listitem=$('<li>',{
        // 'class':'list-group-item',
//         text:inputTask.val()
//     })
//     listTask.append(listitem)
//     inputTask.val('')
// })


