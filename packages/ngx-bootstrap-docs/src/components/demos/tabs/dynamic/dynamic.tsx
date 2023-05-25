import {component$, useClientEffect$, useStore, useTask$, $, useSignal} from '@builder.io/qwik';
import {Tabset, Tab, ITab} from 'ngx-bootstrap';
import {demoComponentContent} from "~/routes/components/tabs/tabs-section.list";
import ExampleComponent from "~/components/example-component/example-component";

export type IState = {
    tabsList: ITab[]
};

export default component$(() => {
    const state = useStore<IState>({
        tabsList: []
    });

    const customId = 'dynamicTabs';
    const addedTabs = useSignal();
    const removedTabs = useSignal();

    useTask$(() => {
        state.tabsList = [
            {
                heading: 'basic',
                id: 'tabs-dynamic-1'
            },
            {
                heading: 'basic1',
                id: 'tabs-dynamic-2'
            },
            {
                heading: 'basic2',
                id: 'tabs-dynamic-3'
            }
        ]
    });

    const addTab = $(() => {
        const tab = {
            heading: `basic${state.tabsList.length + 1}`,
            id: `tabs-dynamic-${state.tabsList.length + 1}`,
            removable: true
        }
        state.tabsList.push(tab);
        state.tabsList = Array.from(state.tabsList);
        addedTabs.value = {
            tabsetId: customId
        }
    });

    const removeAllTabs = $(() => {
        const removedItems = state.tabsList.splice(1, state.tabsList.length - 1);
        const idsArr: string[] = [];
        removedItems.map(item => idsArr.push(item.id));
        state.tabsList = Array.from(state.tabsList);
        removedTabs.value = {
            tabsIds: idsArr,
            tabsetId: customId
        };
    })

    return (
        <>
            <p>Change quantity of tabs by manipulating tabs array</p>
            <button class="btn btn-primary" onClick$={() => addTab()}>Add tab</button>
            {state.tabsList.length > 1 ?
                (<button className="btn btn-primary" onClick$={() => removeAllTabs()}> Remove all tabs </button>) : ''
            }
            <hr/>
            {// @ts-ignore
            <Tabset customId={customId} updateStore={addedTabs.value} removeTabs={removedTabs.value}>
                {state.tabsList.map((item: ITab, index) => {
                    return(
                        <Tab heading={item.heading} id={item.id} key={`key-${item.id}`} removable={item.removable}>Basic content {index}</Tab>
                    )
                })}
            </Tabset>
            }
        </>
    );
});