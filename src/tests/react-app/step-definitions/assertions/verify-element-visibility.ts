import { Then } from '@cucumber/cucumber'
import { ScenarioWorld } from '../../setup/world';
import { ElementKey } from '../../../../global-config';
import { getElementLocator } from '../../../../resources/common/web-element-helper';
import { waitFor } from '../../../../resources/common/wait-for-behavior';

Then(
    /^the "([^"]*)" should (not )?be displayed$/,
    async function( this: ScenarioWorld, elementKey: ElementKey, negate: boolean ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`the ${elementKey} should ${negate?'not ':''}be displayed`);

        const elementIdentifier: string = getElementLocator(page, elementKey, globalConfig);

        await waitFor( async () => {
            const isElementVisible: boolean = (await page.$(elementIdentifier)) != null;
            return isElementVisible === !negate;
        });

    }
)
