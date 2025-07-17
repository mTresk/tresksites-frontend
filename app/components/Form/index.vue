<script setup lang="ts">
const form = reactive({
    name: '',
    phone: '',
    email: '',
    message: '',
    attachment: null as File | null,
})

const {
    submit: formSubmit,
    isLoading,
    validationErrors: errors,
    succeeded: isFormSent,
    client,
} = useSubmit(
    () => {
        return handleForm()
    },
    {
        onSuccess: () => {
            clearForm()
        },
    },
)

async function handleForm() {
    const formData = new FormData()

    formData.append('name', form.name)
    formData.append('phone', form.phone)
    formData.append('email', form.email)
    formData.append('message', form.message)
    if (form.attachment) {
        formData.append('attachment', form.attachment)
    }

    await client(`/api/orders`, { body: formData })
}

function clearForm() {
    form.name = ''
    form.phone = ''
    form.email = ''
    form.message = ''
    form.attachment = null
    clearErrors()
}

function clearErrors() {
    errors.value = {}
}
</script>

<template>
    <form
        class="form"
        :class="{ isLoading }"
        :aria-busy="isLoading"
        @submit.prevent="formSubmit"
    >
        <UiSpinner
            v-if="isLoading"
            light
        />
        <div class="form__wrapper">
            <h2 class="form__title spacer-20">
                Свяжитесь со мной
            </h2>
            <div class="form__body">
                <FormField
                    v-model="form.name"
                    class="form-field"
                    label="Ваше имя"
                    name="name"
                    placeholder="Ваше имя *"
                    type="text"
                    :error="errors?.name"
                    @clear-errors="clearErrors"
                >
                    <UiIconUser />
                </FormField>
                <FormField
                    v-model="form.phone"
                    class="form-field"
                    maska="+7 (###) ### ## ##"
                    label="Ваш номер телефона"
                    name="phone"
                    placeholder="Ваш номер телефона *"
                    type="tel"
                    :error="errors?.phone"
                    @clear-errors="clearErrors"
                >
                    <UiIconPhone />
                </FormField>
                <FormField
                    v-model="form.email"
                    class="form-field"
                    label="Ваш email"
                    name="email"
                    placeholder="Ваш email"
                    type="email"
                    :error="errors?.email"
                    @clear-errors="clearErrors"
                >
                    <UiIconMail />
                </FormField>
                <FormField
                    v-model="form.message"
                    class="form-field"
                    label="Ваш комментарий"
                    name="message"
                    placeholder="Ваш комментарий"
                    type="textarea"
                    @clear-errors="clearErrors"
                />
            </div>
            <div class="form__footer">
                <FormFileInput
                    v-model="form.attachment"
                    class="file"
                    label="Прикрепить бриф"
                    name="attachment"
                    type="file"
                    :error="errors?.attachment"
                    :form-sent="isFormSent"
                    @update:model-value="(file) => form.attachment = file"
                />
                <UiButton
                    class="form__submit"
                    type="submit"
                    :disabled="isFormSent || isLoading"
                    :aria-busy="isLoading"
                    inverted
                    wide
                    icon="right"
                >
                    {{ isFormSent ? 'Сообщение отправлено' : 'Отправить сообщение' }}<UiIconArrowRight aria-hidden="true" />
                </UiButton>
            </div>
            <p class="form__policy">
                Отправляя форму вы соглашаетесь с <NuxtLink to="/policy">
                    политикой конфиденициальности
                </NuxtLink>
            </p>
        </div>
    </form>
</template>

<style lang="scss" scoped>
.form {
    position: relative;
    padding-right: rem(20);
    padding-left: rem(20);
    color: var(--white-color);
    background-color: var(--accent-color);
    border-radius: rem(12);

    @include adaptive-value('padding-top', 60, 40);
    @include adaptive-value('padding-bottom', 60, 40);

    @media (prefers-color-scheme: dark) {
        color: var(--main-color);
    }

    &__wrapper {
        max-width: rem(740);
        margin-inline: auto;

        .isLoading & {
            pointer-events: none;
            opacity: 0.4 !important;
        }
    }

    &__body {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: rem(8);

        @media (max-width: em(650)) {
            grid-template-columns: 1fr;
        }
    }

    &__footer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: rem(8);
        margin-top: rem(12);

        @media (max-width: em(650)) {
            display: flex;
            flex-direction: column;
            gap: rem(12);
        }
    }

    &__policy {
        margin-top: rem(20);
        font-size: 12px;
        line-height: 125%;
        color: var(--white-color);
        text-align: center;
        text-underline-offset: rem(3);

        a {
            text-decoration: underline;
            transition: color 0.3s ease-in-out;

            @media (any-hover: hover) {
                &:hover {
                    color: var(--hover-color);
                }
            }
        }

        @include adaptive-value('font-size', 12, 10);

        @media (prefers-color-scheme: dark) {
            color: var(--main-color);
        }
    }
}
</style>
