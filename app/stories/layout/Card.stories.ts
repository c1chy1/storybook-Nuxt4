import type {Meta, StoryFn} from '@storybook/vue3-vite'
import {Card, Paragraph} from '../../components/'

const meta: Meta<typeof Card> = {
    argTypes: {
        title: {
            control: {
                type: 'text',
            },
            description: 'Sets the title of the card',
            table: {
                defaultValue: {
                    summary: '\'\'',
                },
                type: {
                    summary: 'string | undefined',
                },
            },
        },
        height: {
            control: {
                type: 'number',
            },
            description: 'Sets the height of the card',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'number | undefined',
                },
            },
        },
    },
    args: {
        title: 'Card Title',
    },
    component: Card,
    parameters: {
        docs: {
            description: {
                component:
                    'The `<Card>` component is used to display a card with a title and body content. The component internally manages height behavior.',
            },
        },
    },
    title: 'components/Layout/Card',
} as Meta<typeof Card>

// Template with extensive content
const ContentTemplate: StoryFn<typeof Card> = args => ({
    components: {
        Card,
        Paragraph,
    },
    setup() {
        return {
            args,
        }
    },
    template: `
      <div class="max-w-2xl">
        <Card v-bind="args">
          <template #body>
            <div class="space-y-4">
              <Paragraph :classification="'basic'" class="text-left">
                <strong>This card contains extensive content to demonstrate height behavior.</strong>
              </Paragraph>

              <Paragraph :classification="'basic'" class="text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </Paragraph>

              <Paragraph :classification="'basic'" class="text-left">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </Paragraph>

              <Paragraph :classification="'basic'" class="text-left">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
                et dolore magnam aliquam quaerat voluptatem.
              </Paragraph>

              <div class="bg--additional-grey-light p-4 rounded-md">
                <Paragraph :classification="'basic'" class="text-left">
                  <strong>Highlighted section:</strong> This is a special callout section within the card content.
                </Paragraph>
              </div>

              <Paragraph :classification="'basic'" class="text-left">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
              </Paragraph>

              <Paragraph :classification="'basic'" class="text-left">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
              </Paragraph>

              <Paragraph :classification="'basic'" class="text-left">
                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus.
              </Paragraph>

              <Paragraph :classification="'basic'" class="text-left">
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
                voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
                delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
                repellat.
              </Paragraph>

              <Paragraph :classification="'basic'" class="text-left">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </Paragraph>

              <Paragraph :classification="'basic'" class="text-left">
                <strong>Additional content continues here...</strong> This ensures we have enough text to demonstrate
                the card's internal height management and scrolling behavior.
              </Paragraph>

              <Paragraph :classification="'basic'" class="text-left">
                More paragraphs to extend the content further. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Paragraph>

              <Paragraph :classification="'basic'" class="text-left">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </Paragraph>

              <Paragraph :classification="'basic'" class="text-left">
                <strong>This is near the end of the content.</strong> The card's internal height styling will determine
                whether this content is fully visible or requires scrolling.
              </Paragraph>
            </div>
          </template>
          <template #footer>
            <div class="flex justify-between items-center pt-2 border-t border--additional-grey-light">
              <Paragraph :classification="'basic'" class="text-sm text--additional-grey-dark">
                Footer content
              </Paragraph>
              <div class="flex gap-2">
                <button class="px-3 py-1 text-sm bg--additional-grey-light rounded">Cancel</button>
                <button class="px-3 py-1 text-sm bg--primary text-white rounded">Save</button>
              </div>
            </div>
          </template>
        </Card>
      </div>
    `,
})

// Card with default behavior - component manages height internally
const DefaultCard = ContentTemplate.bind({})
DefaultCard.args = {
    title: 'Default Card Behavior',
}
DefaultCard.parameters = {
    docs: {
        description: {
            story:
                'Default card behavior with extensive content and footer. The component internally manages height with height: auto, allowing the card to grow with content.',
        },
    },
}

// Card with limited height to show scrolling behavior
const LimitedHeightCard = ContentTemplate.bind({})
LimitedHeightCard.args = {
    title: 'Limited Height Card with Scrolling',
    height: 400,
}
LimitedHeightCard.parameters = {
    docs: {
        description: {
            story:
                'Card with height set to 400px showing how content becomes scrollable when it exceeds the height limit. The footer remains visible at the bottom.',
        },
    },
}

export default meta
export {DefaultCard, LimitedHeightCard}
